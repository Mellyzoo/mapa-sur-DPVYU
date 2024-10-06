import { useState, useMemo } from "react";
import { FeatureGroup, LayersControl, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import icono from "../assets/marker-icon.png";
import shadow from "../assets/marker-shadow.png"


const customIcon = L.icon({
  iconUrl: icono,
  // iconSize: [25, 25], // tamaño del ícono
  // iconAnchor: [12, 41], // punto de anclaje
  // popupAnchor: [1, -34], // punto de anclaje del popup
  shadowUrl: shadow, // opción si tienes sombra
  // shadowSize: [30, 30], // tamaño de la sombra
});

// Datos de ejemplo (reemplaza con datos reales)
const edificios = [
  { id: 1, letra: "A", numero: 101, plan: 1234, lat: -32.9, lng: -60.6 },
  { id: 2, letra: "B", numero: 201, plan: 2225, lat: -32.91, lng: -60.61 },
  { id: 3, letra: "C", numero: 301, plan: 3456, lat: -32.92, lng: -60.62 },
  { id: 4, letra: "D", numero: 401, plan: 4567, lat: -32.93, lng: -60.63 },
  { id: 5, letra: "E", numero: 501, plan: 5678, lat: -32.94, lng: -60.64 },
  { id: 6, letra: "F", numero: 601, plan: 6789, lat: -32.95, lng: -60.65 },
  { id: 7, letra: "G", numero: 701, plan: 7890, lat: -32.96, lng: -60.66 },
  { id: 8, letra: "H", numero: 801, plan: 8901, lat: -32.97, lng: -60.67 },
  { id: 9, letra: "I", numero: 901, plan: 9012, lat: -32.98, lng: -60.68 },
];

const viviendas = [
  { id: 3, numero: 1001, plan: 555, lat: -32.92, lng: -61.62 },
  { id: 4, numero: 1002, plan: 666, lat: -32.93, lng: -62.33 },
  { id: 5, numero: 1003, plan: 777, lat: -32.94, lng: -60.14 },
  { id: 6, numero: 1004, plan: 888, lat: -32.95, lng: -60.95 },
  { id: 7, numero: 1005, plan: 999, lat: -32.96, lng: -60.66 },
  { id: 8, numero: 1006, plan: 1010, lat: -32.97, lng: -60.67 },
  { id: 9, numero: 1007, plan: 1111, lat: -32.98, lng: -60.68 },
  { id: 10, numero: 1008, plan: 1212, lat: -32.99, lng: -60.69 },
  { id: 15, numero: 1013, plan: 1717, lat: -32.85, lng: -60.54 },
  { id: 16, numero: 1014, plan: 1818, lat: -32.84, lng: -60.53 },
  { id: 17, numero: 1015, plan: 1919, lat: -32.83, lng: -59.52 },
  { id: 18, numero: 1016, plan: 2020, lat: -32.82, lng: -60.51 },
  { id: 19, numero: 1017, plan: 2121, lat: -32.81, lng: -60.5 },
  { id: 20, numero: 1018, plan: 2222, lat: -32.8, lng: -60.49 },
];

const useFilteredData = (data, filters) => {
  return useMemo(() => {
    return data.filter(
      (item) =>
        (!filters.edificio ||
          item.letra?.toLowerCase().includes(filters.edificio.toLowerCase()) ||
          item.numero?.toString().includes(filters.edificio)) &&
        (!filters.vivienda ||
          item.numero?.toString().includes(filters.vivienda)) &&
        (!filters.plan || item.plan?.toString().includes(filters.plan))
    );
  }, [data, filters]);
};

export const Layers = () => {
  const [filters, setFilters] = useState({
    edificio: "",
    vivienda: "",
    plan: "",
  });

  const edificiosFiltrados = useFilteredData(edificios, filters);
  const viviendasFiltradas = useFilteredData(viviendas, filters);

  const searchFormStyle = {
    padding: "5px",
    borderRadius: "4px",
    marginBottom: "0",
    width: "40%",
  };

  const inputStyle = {
    width: "100%",
    padding: "5px",
    margin: "0",
    borderRadius: "3px",
    border: "1px solid #ccc",
  };

  return (
    <>
      <LayersControl position="topright">
        <LayersControl.Overlay checked id="Edificios" name="Edificios">
          <FeatureGroup>
            {edificiosFiltrados.map((edificio) => (
              <Marker
                icon={customIcon}
                key={edificio.id}
                position={[edificio.lat, edificio.lng]}
              >
                <Popup>
                  Edificio {edificio.letra || edificio.numero} - Plan{" "}
                  {edificio.plan}
                </Popup>
              </Marker>
            ))}
          </FeatureGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay checked id="Viviendas" name="Viviendas">
          <FeatureGroup>
            {viviendasFiltradas.map((vivienda) => (
              <Marker
                icon={customIcon}
                key={vivienda.id}
                position={[vivienda.lat, vivienda.lng]}
              >
                <Popup>
                  Casa {vivienda.numero} - Plan {vivienda.plan}
                </Popup>
              </Marker>
            ))}
          </FeatureGroup>
        </LayersControl.Overlay>
      </LayersControl>

      <form
        className="leaflet-control"
        id="search"
        name="search"
        style={searchFormStyle}
      >
        <input
          type="text"
          name="edificio"
          id="edificio"
          placeholder="Filtrar edificio (letra o número)"
          autoComplete="off"
          value={filters.edificio}
          onChange={(e) => setFilters({ ...filters, edificio: e.target.value })}
          style={inputStyle}
        />
        <input
          type="text"
          name="vivienda"
          id="vivienda"
          placeholder="Filtrar vivienda (número)"
          autoComplete="off"
          value={filters.vivienda}
          onChange={(e) => setFilters({ ...filters, vivienda: e.target.value })}
          style={inputStyle}
        />
        <input
          type="text"
          name="plan"
          id="plan"
          placeholder="Filtrar por plan (número)"
          autoComplete="off"
          value={filters.plan}
          onChange={(e) => setFilters({ ...filters, plan: e.target.value })}
          style={inputStyle}
        />
      </form>
    </>
  );
};
