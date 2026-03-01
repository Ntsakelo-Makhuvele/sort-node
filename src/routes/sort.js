import { sortController } from "../controllers/sort.js"


export default(router) => {
    router.post('/api/v1/sort', sortController);
}