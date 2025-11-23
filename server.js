require("dotenv").config();
const express = require("express");
const path = require("path");
const connectDB = require("./db/connect");

const app = express();
const PORT = process.env.PORT || 3000;


// ⭐ JSON 파싱
app.use(express.json());

// ⭐ DB 라우터 - 반드시 public보다 위에서 등록
console.log("🔥 서버에서 라우터 require 시도 중");
app.use("/api/projects", require("./routes/projects"));

// ⭐ 정적 파일 서빙
app.use(express.static(path.join(__dirname, "public")));

// ⭐ 메인 페이지
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ⭐ DB 연결 후 서버 실행
connectDB();
app.listen(PORT, () => {
  console.log(`🚀 서버 실행됨: http://localhost:${PORT}`);
});
