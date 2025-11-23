console.log("🔥🔥🔥 projects.js 라우터 파일 로드됨");


const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

// 모든 프로젝트 가져오기
router.get("/", async (req, res) => {
  try {
    const data = await Project.find().sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "DB 조회 실패" });
  }
});

// 프로젝트 추가 (관리자용)
router.post("/", async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.json(project);
  } catch (err) {
    res.status(500).json({ error: "DB 입력 실패" });
  }
});

module.exports = router;
