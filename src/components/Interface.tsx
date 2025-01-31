interface CaixaProps {
  locations: string[];
}

export function Caixa({ locations }: CaixaProps) {
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
            marginTop: "0",
          }}
        >
          {locations.map((location, index) => (
            <div
              key={index}
              style={{
                fontSize: "2vh",
                padding: "1vh",
                borderBottom: "1px solid white",
                boxSizing: "border-box",
                justifyContent: "top",
                height: "60px",
                maxHeight: "100%",
              }}
            >
              {location}
            </div>
          ))}
        </div>
      </div>

      <button
        style={{
          height: "5vh",
          width: "20vw",
          border: "2px",
          borderColor: "red",
          borderRadius: "15px",
          marginBottom: "3vh",
          boxShadow: "8px 10px 5px 0px rgba(0,0,0,0.75)",
          cursor: "pointer",
        }}
      >
        Limpar Marcações
      </button>
    </div>
  );
}
