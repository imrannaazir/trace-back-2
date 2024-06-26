import validateRequest from "../../middlewares/validateRequest";
import { createFoundItemCategoryValidationSchema } from "./foundItemCategory.validation";
import FoundItemCategoryControllers from "./foundItemCategory.controllers";
import { Router } from "express";
import auth from "../../middlewares/auth";

const router = Router();

// create found item category : POST
router.post(
  "/",
  auth(),
  validateRequest(createFoundItemCategoryValidationSchema),
  FoundItemCategoryControllers.createFoundItemCategory,
);

// retrieved all categories : GET
router.get("/get-all", FoundItemCategoryControllers.getCategoryList);

const FoundItemCategoryRoutes = router;
export default FoundItemCategoryRoutes;
