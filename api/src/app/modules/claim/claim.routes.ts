import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import {
  createClaimValidationSchema,
  updateClaimStatusValidationSchema,
} from "./claim.validations";
import ClaimControllers from "./claims.controllers";

const router = Router();

// create claim : POST
router.post(
  "/",
  auth(),
  validateRequest(createClaimValidationSchema),
  ClaimControllers.createClaim,
);

// get all claim : GET
router.get("/", auth(), ClaimControllers.getAllClaims);

// update claim status : PATCH
router.patch(
  "/:id",
  auth(),
  validateRequest(updateClaimStatusValidationSchema),
  ClaimControllers.updateClaimStatus,
);
const ClaimRoutes = router;
export default ClaimRoutes;