import { APIError } from "@/util/errors";

// U5
import buildings_U5 from "./docs/u5/buildings.json";
import recipes_U5 from "./docs/u5/recipes.json";
import resources_U5 from "./docs/u5/resources.json";
import items_U5 from "./docs/u5/items.json";
import handGatheredItems_U5 from "./docs/u5/handGatheredItems.json";

// U6
import buildings_U6 from "./docs/u6/buildings.json";
import recipes_U6 from "./docs/u6/recipes.json";
import resources_U6 from "./docs/u6/resources.json";
import items_U6 from "./docs/u6/items.json";
import handGatheredItems_U6 from "./docs/u6/handGatheredItems.json";

// U7
import buildings_U7 from "./docs/u7/buildings.json";
import recipes_U7 from "./docs/u7/recipes.json";
import resources_U7 from "./docs/u7/resources.json";
import items_U7 from "./docs/u7/items.json";
import handGatheredItems_U7 from "./docs/u7/handGatheredItems.json";

export const GV_U5 = "U5";
export const GV_U6 = "U6";
export const GV_U7 = "U7";
export const ALLOWED_GAME_VERSIONS = [GV_U5, GV_U6, GV_U7];
export const LATEST_VERSION = GV_U7;

export function getDataByVersion(version: string): any {
  if (version === GV_U5) {
    return {
      buildings: buildings_U5,
      recipes: recipes_U5,
      resources: resources_U5,
      items: items_U5,
      handGatheredItems: handGatheredItems_U5,
    };
  }
  if (version === GV_U6) {
    return {
      buildings: buildings_U6,
      recipes: recipes_U6,
      resources: resources_U6,
      items: items_U6,
      handGatheredItems: handGatheredItems_U6,
    };
  }
  if (version === GV_U7) {
    return {
      buildings: buildings_U7,
      recipes: recipes_U7,
      resources: resources_U7,
      items: items_U7,
      handGatheredItems: handGatheredItems_U7,
    };
  }
  throw new APIError(400, "Invalid game version");
}
