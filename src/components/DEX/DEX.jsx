import { useState } from "react";
import { Button, Card, InputNumber } from "antd";

const styles = {
  card: {
    width: "430px",
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "1rem",
    fontSize: "16px",
    fontWeight: "500",
  },
  input: {
    padding: "0",
    fontWeight: "500",
    fontSize: "23px",
    display: "block",
    width: "100%",
  },
  priceSwap: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "15px",
    color: "#434343",
    marginTop: "8px",
    padding: "0 10px",
  },
};

function DEX() {
  const [fromAmount, setFromAmount] = useState();
  const [toAmount, setToAmount] = useState();

  const handleInputChange = (e) => {
    setFromAmount(e);
    setToAmount(e / 0.01);
  };

  return (
    <>
      <Card style={styles.card} bodyStyle={{ padding: "18px" }}>
        <Card
          style={{ borderRadius: "1rem" }}
          bodyStyle={{ padding: "0.8rem" }}
        >
          <div
            style={{ marginBottom: "5px", fontSize: "14px", color: "#434343" }}
          >
            From
          </div>
          <div
            style={{
              display: "flex",
              flexFlow: "row nowrap",
              justifyContent: "space-between",
            }}
          >
            <div>
              <InputNumber
                bordered={false}
                placeholder="0.05"
                style={{ ...styles.input, marginLeft: "-10px" }}
                onChange={handleInputChange}
                value={fromAmount}
              />
            </div>
            <div
              style={{
                height: "fit-content",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "0.6rem",
                padding: "5px 10px",
                fontWeight: "500",
                fontSize: "17px",
                gap: "7px",
                border: "none",
              }}
            >
              <img
                style={{
                  width: "20px",
                  height: "20px",
                }}
                src="https://seeklogo.com/images/B/binance-coin-bnb-logo-97F9D55608-seeklogo.com.png"
                alt="bnb logo"
              />
              <div>BNB</div>
            </div>
          </div>
        </Card>
        <Card
          style={{ borderRadius: "1rem", marginTop: "20px" }}
          bodyStyle={{ padding: "0.8rem" }}
        >
          <div
            style={{ marginBottom: "5px", fontSize: "14px", color: "#434343" }}
          >
            To
          </div>
          <div
            style={{
              display: "flex",
              flexFlow: "row nowrap",
              justifyContent: "space-between",
            }}
          >
            <div>
              <InputNumber
                bordered={false}
                placeholder="5"
                style={{ ...styles.input, marginLeft: "-10px" }}
                value={toAmount}
                readOnly
                // value={
                //   quote
                //     ? parseFloat(
                //         Moralis?.Units?.FromWei(
                //           quote?.toTokenAmount,
                //           quote?.toToken?.decimals,
                //         ),
                //       ).toFixed(6)
                //     : ""
                // }
              />
            </div>
            <div
              style={{
                height: "fit-content",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRadius: "0.6rem",
                padding: "5px 10px",
                fontWeight: "500",
                fontSize: "17px",
                gap: "7px",
                border: "none",
              }}
            >
              <img
                style={{
                  width: "20px",
                  height: "20px",
                }}
                src="https://seeklogo.com/images/B/binance-coin-bnb-logo-97F9D55608-seeklogo.com.png"
                alt="bnb logo"
              />
              <div>PPT</div>
            </div>
          </div>
        </Card>
        <Button
          type="primary"
          size="large"
          style={{
            width: "100%",
            marginTop: "15px",
            borderRadius: "0.6rem",
            height: "50px",
          }}
          // onClick={() => trySwap(currentTrade)}
        >
          {/* {ButtonState.text} */}Swap
        </Button>
      </Card>
    </>
  );
}

export default DEX;
