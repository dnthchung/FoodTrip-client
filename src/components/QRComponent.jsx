import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const QRComponent = (props) => {
  const { total, uuid, name, time, origin, discount, percentDiscount, postData } = props;
  const bank = {
    BANK_ID: "VietinBank",
    ACCOUNT_NO: "108874842372",
    TEMPLATE: "compact2",
    AMOUNT: total,
    DESCRIPTION: "Foodtripvn " + uuid,
    ACCOUNT_NAME: "FOODTRIPVNS",
  };
  const api_get = "https://oauth.casso.vn/v2/transactions?sort=DESC";
  const CASSO_API_KEY = "AK_CS.d5c89350837c11ef92ba87773ecade6b.HflxXnpeVAQ6VtEve6U9549eI0r7AMYZ9YyABLBXrfi3KIcCmJmRxrFfiz5AeiQjpfwyeHSO";

  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [isPaid, setIsPaid] = useState(false);
  const [userInfo, setUserInfo] = useState({ email: "", supportContent: "" });

  const fetchData = async () => {
    try {
      const res = await fetch(api_get, {
        headers: {
          Authorization: `apikey ${CASSO_API_KEY}`,
          "Content-Type": "application/json",
        },
      });
      const jsonData = await res.json();
      setData(jsonData);

      jsonData.data.records.forEach((trans) => {
        if (Math.floor(trans.amount) >= Math.floor(total) && trans.description.includes(uuid.replace(/-/g, ""))) {
          setIsPaid(true);
          saveOrder();
          return;
        }
      });
    } catch (error) {
      console.log("fetchData qr error", error);
    }
  };

  useEffect(() => {
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const saveOrder = async () => {
    const orderData = { ...postData, userInfo };
    axios
      .post("http://localhost:5173/order", orderData)
      .then((res) => {
        setTimeout(() => {
          toast.success("Yêu cầu hỗ trợ đã được gửi thành công!");
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.log("saveOrder error:", error);
        toast.error("Có lỗi gì đó đã xảy ra!😭\nVui lòng liên hệ admin qua facebook/zalo/sdt");
      });
  };

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          .qr-code {
            flex: 1;
            max-width: 50%; /* Adjust the width */
            padding: 10px; /* Adjust the padding */
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .user-form {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }
          .user-form h2 {
            font-size: 24px;
            color: #EF4444;
            margin-bottom: 20px;
            text-align: center;
          }
          .payment-details {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px;
            border-bottom: 1px solid #ccc;
          }
          .payment-details p {
            font-size: 18px;
            color: #333;
            margin-bottom: 10px;
          }
          .payment-details p:last-child {
            font-size: 24px;
            font-weight: bold;
            color: #EF4444;
          }
          
          .alert-message {
            color: red;
            font-weight: bold;
            text-align: center;
            margin-bottom: 20px;
          }
        `}
      </style>
      <div className="qr-code">
        <h2 className="alert-message">Vui lòng không sửa nội dung chuyển khoản!</h2>
        <img
          src={`https://img.vietqr.io/image/${bank.BANK_ID}-${bank.ACCOUNT_NO}-${bank.TEMPLATE}.png?amount=${bank.AMOUNT}&addInfo=${bank.DESCRIPTION}&accountName=${bank.ACCOUNT_NAME}`}
          alt="QR Code"
          style={{ width: "50%", borderRadius: "8px", display: "block", margin: "0 auto" }}
        />
      </div>
      <div className="user-form">
        <h2>Tóm tắt đơn hàng</h2>
        <div className="payment-details">
          <p>Tên gói: {name}</p>
          <p>Gói: {time} tháng</p>
          <p>Giá gốc: {formatAmount(origin)}VND</p>
        </div>
        <div className="payment-details">
          <p>Tổng phụ</p>
          <p>Gói Giảm giá -{percentDiscount}</p>
          <p>-{formatAmount(discount)}VND</p>
        </div>
        <div className="payment-details">
          <p>Ước tính tổng</p>
          <p>{formatAmount(bank.AMOUNT)}VND</p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#f1f3f5",
    borderRadius: "10px",
  },
};
const formatAmount = (amount) => {
    return new Intl.NumberFormat('de-DE').format(amount);
  };
export default QRComponent;