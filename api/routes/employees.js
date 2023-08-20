import express from "express"
import { addEmployee, deleteEmployee, updateEmployee, getEmployees, getEmployee } from "../controllers/employee.js"

const router = express.Router()
 
router.get("/", getEmployees )
router.get("/:id", getEmployee)
router.post("/", addEmployee)
router.delete("/:id", deleteEmployee)
router.put("/:id", updateEmployee )

export default router