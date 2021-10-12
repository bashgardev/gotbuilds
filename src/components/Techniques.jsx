import React, { useContext, useState } from "react";
import TechniqueButton from "./TechniqueButton";
import AbilityButton from "./AbilityButton";
import { LoadoutContext } from "../context/LoadoutContext";
import { RadioGroup } from "@headlessui/react";
import techniques from "../db/techniques.json";
import TechniqueInfo from "./TechniqueInfo";
import TechniqueInfoMd from "./TechniqueInfoMd";

export default function Techniques() {
  const { currentLoadout, setCurrentLoadout } = useContext(LoadoutContext);
  const [ult, setUlt] = useState(currentLoadout.ult);
  const [ability, setAbility] = useState(currentLoadout.ability);
  const [tech_1, setTech_1] = useState(currentLoadout.tech_1);
  const [tech_2, setTech_2] = useState(currentLoadout.tech_2);
  const [tech_3, setTech_3] = useState(currentLoadout.tech_3);

  const ultInfo = techniques.filter(
    (tech) =>
      currentLoadout.class === tech.class &&
      tech.type === "ult" &&
      tech.id === ult
  )[0];

  const abilityInfo = techniques.filter(
    (tech) =>
      currentLoadout.class === tech.class &&
      tech.type === "ability" &&
      tech.id === ability
  )[0];

  const tech_1Info = techniques.filter(
    (tech) =>
      currentLoadout.class === tech.class &&
      tech.type === "tech_1" &&
      tech.id === tech_1
  )[0];

  const tech_2Info = techniques.filter(
    (tech) =>
      currentLoadout.class === tech.class &&
      tech.type === "tech_2" &&
      tech.id === tech_2
  )[0];

  const tech_3Info = techniques.filter(
    (tech) =>
      currentLoadout.class === tech.class &&
      tech.type === "tech_3" &&
      tech.id === tech_3
  )[0];

  return (
    <div className="border-t-2 border-opacity-30 p-3 text-white bg-primary-medium-shaded text-opacity-80">
      <div className=" md:text-sm items-center grid grid-flow-col grid-rows-5 md:grid-cols-3 grid-cols-2">
        <RadioGroup
          as="div"
          className="flex flex-row place-self-center"
          value={ult}
          onChange={(value) =>
            setCurrentLoadout((prevState) => {
              prevState.ult = value;
              setUlt(value);
              return { ...prevState };
            })
          }
        >
          <RadioGroup.Option value="1">
            {({ checked }) => (
              <AbilityButton type="ult" selected={checked}>
                1
              </AbilityButton>
            )}
          </RadioGroup.Option>
        </RadioGroup>

        <RadioGroup
          as="div"
          className="flex flex-row place-self-center"
          value={ability}
          onChange={(value) =>
            setCurrentLoadout((prevState) => {
              prevState.ability = value;
              setAbility(value);
              return { ...prevState };
            })
          }
        >
          <RadioGroup.Option value="1">
            {({ checked }) => (
              <AbilityButton selected={checked}>1</AbilityButton>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="2">
            {({ checked }) => (
              <AbilityButton selected={checked}>2</AbilityButton>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="3">
            {({ checked }) => (
              <AbilityButton selected={checked}>3</AbilityButton>
            )}
          </RadioGroup.Option>
        </RadioGroup>

        <RadioGroup
          as="div"
          className="flex flex-row place-self-center"
          value={tech_1}
          onChange={(value) =>
            setCurrentLoadout((prevState) => {
              prevState.tech_1 = value;
              setTech_1(value);
              return { ...prevState };
            })
          }
        >
          <RadioGroup.Option value="1">
            {({ checked }) => (
              <TechniqueButton selected={checked}>1</TechniqueButton>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="2">
            {({ checked }) => (
              <TechniqueButton selected={checked}>2</TechniqueButton>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="3">
            {({ checked }) => (
              <TechniqueButton selected={checked}>3</TechniqueButton>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="4">
            {({ checked }) => (
              <TechniqueButton selected={checked}>4</TechniqueButton>
            )}
          </RadioGroup.Option>
        </RadioGroup>
        <RadioGroup
          as="div"
          className="flex flex-row place-self-center"
          value={tech_2}
          onChange={(value) =>
            setCurrentLoadout((prevState) => {
              prevState.tech_2 = value;
              setTech_2(value);
              return { ...prevState };
            })
          }
        >
          <RadioGroup.Option value="1">
            {({ checked }) => (
              <TechniqueButton selected={checked}>1</TechniqueButton>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="2">
            {({ checked }) => (
              <TechniqueButton selected={checked}>2</TechniqueButton>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="3">
            {({ checked }) => (
              <TechniqueButton selected={checked}>3</TechniqueButton>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="4">
            {({ checked }) => (
              <TechniqueButton selected={checked}>4</TechniqueButton>
            )}
          </RadioGroup.Option>
        </RadioGroup>
        <RadioGroup
          as="div"
          className="flex flex-row place-self-center"
          value={tech_3}
          onChange={(value) =>
            setCurrentLoadout((prevState) => {
              prevState.tech_3 = value;
              setTech_3(value);
              return { ...prevState };
            })
          }
        >
          <RadioGroup.Option value="1">
            {({ checked }) => (
              <TechniqueButton selected={checked}>1</TechniqueButton>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="2">
            {({ checked }) => (
              <TechniqueButton selected={checked}>2</TechniqueButton>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="3">
            {({ checked }) => (
              <TechniqueButton selected={checked}>3</TechniqueButton>
            )}
          </RadioGroup.Option>
          <RadioGroup.Option value="4">
            {({ checked }) => (
              <TechniqueButton selected={checked}>4</TechniqueButton>
            )}
          </RadioGroup.Option>
        </RadioGroup>

        <TechniqueInfoMd
          title={ultInfo.title}
          description={ultInfo.description}
        />
        <TechniqueInfoMd
          title={abilityInfo.title}
          description={abilityInfo.description}
        />
        <TechniqueInfoMd
          title={tech_1Info.title}
          description={tech_1Info.description}
        />
        <TechniqueInfoMd
          title={tech_2Info.title}
          description={tech_2Info.description}
        />
        <TechniqueInfoMd
          title={tech_3Info.title}
          description={tech_3Info.description}
        />

        <TechniqueInfo>{ultInfo.title}</TechniqueInfo>
        <TechniqueInfo>{abilityInfo.title}</TechniqueInfo>
        <TechniqueInfo>{tech_1Info.title}</TechniqueInfo>
        <TechniqueInfo>{tech_2Info.title}</TechniqueInfo>
        <TechniqueInfo>{tech_3Info.title}</TechniqueInfo>
      </div>
    </div>
  );
}
