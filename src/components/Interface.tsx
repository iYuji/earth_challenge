export function Caixa() {
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
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          fontSize: "3vh",
          marginTop: "1vh",
          height: "5vh",
          textShadow: "#cf30ca 1px 0 10px",
        }}
      >
        NewCad
      </h3>
      <h4
        style={{
          textAlign: "left",
          marginLeft: "2vw",
          fontSize: "2.3vh",
        }}
      >
        Localizações Salvas
      </h4>
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
