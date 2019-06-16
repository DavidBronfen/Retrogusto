import { Router } from "express";
import { asyncMiddleware } from "../../util/asyncMiddleware";
import { params, createNew, getOne, getAll, editFields, deleteOne} from "./categoryController";

const router: Router = Router();

router.param("id", params);

router.route("/")
    .get(asyncMiddleware(getAll))
    .post(asyncMiddleware(createNew));

router.route("/:id")
    .get(asyncMiddleware(getOne))
    .put(asyncMiddleware(editFields))
    .delete(asyncMiddleware(deleteOne));

export default router;
