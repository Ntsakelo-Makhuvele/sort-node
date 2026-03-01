import { Router } from "express";
import sort from "./sort.js";

const router = Router();

export default () => {
    sort(router);
    return router;
}