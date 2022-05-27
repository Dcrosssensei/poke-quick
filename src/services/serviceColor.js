const serviceColor = (url, dispatch, target, servicio) => {
  servicio(url).then((res) => {
    let data = res;
    let pack = [];

    data.forEach((e) => {
      let pack2 = {};
      pack2.name = e.name;
      let url = e.url;
      let urlFix = url.split("/")[6];
      pack2.id = urlFix;
      pack.push(pack2);
    });
    console.log(pack);
    dispatch(target(pack));
  });
};

export default serviceColor;
