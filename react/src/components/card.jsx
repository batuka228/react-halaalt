export const Card = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid rgb(0, 0, 0, 0.5)",
          width: "390px",
          borderRadius: "8px",
          marginTop: "48px",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "grey",
        }}
      >
        <div
          style={{
            borderBottom: "1px solid rgb(0, 0, 0, 0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/favicon.ico" alt="" />
        </div>
        <div
          style={{
            display: "flex",
            paddingLeft: "14px",
            flexDirection: "column",
            gap: "10px",
            paddingBottom: "14px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ flexDirection: "row", display: "flex", gap: "14px" }}>
            <h4>barara </h4>
            <h4>lastname</h4>
          </div>
          <div
            style={{
              fontSize: "20px",
              display: "flex",
              flexDirection: "row",
              gap: "30px",
            }}
          >
            <div>employment.title</div>
            <div>gender</div>
          </div>
          <div style={{ fontSize: "18px" }}>mail</div>
        </div>
      </div>
    </div>
  );
};
