import { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import { getAreasData } from "../../utils/getAreasData";
import { removePlotBackground } from "../../utils/removePlotBackground";
import Section from "../../components/Section";
import { ChlorophyllWrapper } from "./styled";
import Placeholder from "../../components/Placeholder";

type chlorophyllTypes = {
  loginState: string,
  token: string
}

const Chlorophyll = ({ loginState, token }: chlorophyllTypes) => {
  const [data, setData] = useState([]);
  const [newData, setNewData]: any = useState([]);
  const [plotDims, setPlotDims] = useState([640, 560]);
  const [state, setState] = useState("idle");

  useEffect(() => setNewData(removePlotBackground(data)), [data]);

  // eslint-disable-next-line
  useEffect(() => setPlotDims([window.innerWidth * 0.887, 560]));

  useEffect(() => {
    token && getAreasData(token, setData, setState);
  }, [token]);

  return (
    <Section title="Chlorophyll">
      <ChlorophyllWrapper>
        {loginState === "login failed" ? <Placeholder text={loginState} /> :
          loginState === "logged in" && state === "ready" ?
            <Plot
              data={[{
                z: newData,
                type: 'heatmap',
                showscale: false
              }]}
              layout={{
                width: plotDims[0],
                height: plotDims[1]
              }}
            /> :
            <Placeholder text={state} />
        }
      </ChlorophyllWrapper>
    </Section>
  )
};

export default Chlorophyll;