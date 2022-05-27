import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  detEvolution,
  detPokemon,
  detSpeciePokemon,
  detDescription,
} from "../services/serviceDetails";

//redux
import { useSelector } from "react-redux";
import { selectgender } from "../redux/filtersSlide";

const Modal = ({ pokemonName, onClose, id, imgid }) => {
  const [details, setDetails] = useState({
    height: "",
    weight: "",
    types: [],
  });
  const [species, setSpecies] = useState({
    gender: "",
    habitat: "",
    color: "",
  });
  const [evolutions, setEvolutions] = useState([]);
  const [description, setDescription] = useState("");

  const genderCheck = useSelector(selectgender);

  useEffect(() => {
    detPokemon(id).then((resp) => {
      const datos = resp;
      const types = datos.types;
      const typeFix = [];
      types.forEach((e) => {
        let item = e.type.name;
        typeFix.push(item);
      });
      setDetails({
        height: datos.height,
        weight: datos.weight,
        types: typeFix,
      });
    });

    detSpeciePokemon(id).then((resp) => {
      const datos = resp;
      setSpecies({
        color: datos?.color?.name,
        gender: datos?.gender_rate,
        habitat: datos?.habitat?.name,
      });
    });

    detEvolution(id).then((resp) => {
      const datos = resp;
      const dataEvolutions =
        datos.data.gen3_species[0].pokemon_v2_evolutionchain
          .pokemon_v2_pokemonspecies;

      const evoFix = [];
      dataEvolutions.forEach((e) => {
        let item = {};
        let imgIDs = e.id;
        if (imgIDs < 10) {
          imgIDs = "00" + imgIDs;
        } else if (imgIDs < 100) {
          imgIDs = "0" + imgIDs;
        }
        item.id = imgIDs;
        item.name = e.name;
        evoFix.push(item);
      });
      setEvolutions(evoFix);
    });

    detDescription(id).then((resp) => {
      const datos = resp;
      setDescription(datos.descriptions[7].description);
    });
  }, [id]);

  return (
    <div className="Modal">
      <div className="Modal__Container">
        <button onClick={onClose} />
        <div className="Modal__Info">
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${imgid}.png`}
            alt=""
          />
          <div className="Info__Item">
            <div className="Info__Title">
              <h1> {pokemonName} </h1>
              <h2> {imgid}</h2>
            </div>
            <p> {description} </p>
            <table>
              <tbody>
                <tr>
                  <td> Height </td>
                  <td> {details.height} </td>
                </tr>
                <tr>
                  <td> Weight </td>
                  <td> {details.weight} </td>
                </tr>
                <tr>
                  <td> Category </td>
                  <td> {details.types[0]} </td>
                </tr>
                <tr>
                  <td> Gender </td>
                  <td>
                    {genderCheck[species.gender - 1]?.name ?? "Undefined"}
                  </td>
                </tr>
                <tr>
                  <td> Habitat </td>
                  <td> {species.habitat ?? "undefined"} </td>
                </tr>
                <tr>
                  <td> Color </td>
                  <td> {species.color ?? "undefined"} </td>
                </tr>
              </tbody>
            </table>
            <h3>Types</h3>
            <div className="Info__Tags">
              {details.types.map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </div>
          </div>
        </div>
        <hr />
        <div className="Modal__Evolution">
          <h2>Evolution</h2>

          <div className="Evolution__Item">
            {evolutions.map((item, index) => (
              <div className="Item__Container" key={index}>
                <img
                  src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${item.id}.png`}
                  alt="title"
                  title={item.name}
                />
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ModalP({ name, Close, id, imgid }) {
  return createPortal(
    <Modal onClose={Close} imgid={imgid} id={id} pokemonName={name}></Modal>,
    document.getElementById("modalPortal")
  );
}
