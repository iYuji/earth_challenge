interface Location {
  name: string;
  link: string;
}
interface CaixaProps {
  locations: Location[];
  onClearPins: () => void;
}

export function Caixa({ locations, onClearPins }: CaixaProps) {
  return (
    <div
      style={{
        position: "absolute",
        top: "5%",
        right: "1%",
        width: "50vh",
        height: "80vh",
        border: "3px solid white",
        borderRadius: "30px",
        background: "rgba(128, 128, 128, 0.8)",
        zIndex: "10",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "stretch",
        padding: "2vh",
        maxHeight: "80vh",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      <h3
        style={{
          fontSize: "3vh",
          height: "5vh",
          textAlign: "center",
          textShadow: "#cf30ca 1px 0 10px",
          margin: "0",
        }}
      >
        NewCad
      </h3>

      <div
        style={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          width: "100%",
          marginTop: "0",
          paddingTop: "0",
        }}
      >
        <h4
          style={{
            textAlign: "left",
            margin: "0",
            fontSize: "2.3vh",
            maxHeight: "30px",
            paddingTop: "0",
            paddingBottom: "0",
          }}
        >
          Localizações Salvas
        </h4>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1vh",
            marginTop: "1vh",
          }}
        >
          {locations.map((location, index) => (
            <div
              key={index}
              style={{
                fontSize: "2vh",
                padding: "1vh",
                borderBottom: "1px solid solid-grey",
                boxSizing: "border-box",
                justifyContent: "top",
                height: "4vh",
                maxHeight: "100%",
              }}
            >
              <a
                style={{
                  color: "black",
                  textDecoration: "none",
                }}
                href={location.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {location.name}
              </a>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={onClearPins}
        style={{
          height: "5vh",
          width: "20vw",
          border: "2px",
          fontSize: "1vw",
          borderColor: "red",
          borderRadius: "15px",
          marginBottom: "1vh",
          boxShadow: "8px 10px 5px 0px rgba(0,0,0,0.75)",
          cursor: "pointer",
        }}
      >
        Limpar Marcações
      </button>
    </div>
  );
}
