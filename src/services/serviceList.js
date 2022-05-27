const serviceList = (url, dispatch, target, servicio) => {
  servicio(url).then((res) => {
    let data = res;
    let pack = [];

    data.forEach((e) => {
      let pack2 = {};
      pack2.name = e.pokemon.name;
      let url = e.pokemon.url;
      let urlFix = url.split("/")[6];
      pack2.id = urlFix;
      pack.push(pack2);
    });
    dispatch(target(pack));
  });
};

export default serviceList;
