import mock from "../assets/mockedPrimary.json";
import { postprocessPolygonData } from "./postprocessPolygonData";
import { findViewCenter } from "./findViewCenter";

export const getAreasPrimary = (
  setPrimary: any,
  setPrimaryCenter: any,
  setPrimaryState: any
) => {
  try {
    setPrimaryState("loading");
    const data = mock;
    const result = postprocessPolygonData(data.extent);
    const center = findViewCenter(result);
    setPrimaryCenter(center);
    setPrimary(result);
    setPrimaryState("ready");
  } catch (error) {
    setPrimaryState("loading error");
  }
};