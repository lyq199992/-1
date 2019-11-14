const state = {
    shop_list: [{
        id: 11,
        name: '鱼香肉丝',
        price: 12,
      },
      {
        id: 22,
        name: '宫保鸡丁',
        price: 14,
      },
      {
        id: 34,
        name: '土豆丝',
        price: 10,
      },
      {
        id: 47,
        name: '米饭',
        price: 2,
      }],
    added: [],
    num: 0,
    sumMoney: 0
}
const getters = {
    // 抛出去的数据
    // 商品列表
    // shopList: 
    sumMoney: state => state.sumMoney,
    sum: state => state.added.length,
    added: state => state.added,
    shopList: state => state.shop_list,
     //购物车的列表
     cartProducts:state=>{
         return state.added.map(({id,num})=>{ //在actions中只有的id和num的字段
             //在原始数据数据上面进行刷选，这里通过id来匹配
             let product = state.shop_list.find(n=>n.id == id)
             console.info(product)
            //  return {
            //      ...product,
            //      num
            //  }
         })
     },
}

// actions分发了一个add的方法，用mutations接受
const actions = {
  addShopList( {commit} , product ){
    commit('add', { // 传递一个add的方法，携带参数id,
      id: product.id
    })
    // console.log(product, commit)
  },

  clearCart ({commit}){
    commit('clearCartList');
  }
}
const mutations = {
  clearCartList(state){
    state.added = []
  },
  add(state, {id}) { // 结构id，id和{id}的区别
    let record = state.shop_list.find(n =>n.id == id);
    
    if(record){
      state.added.push(record)
      state.num++;
      let sum = 0;
    for(let i =0; i < state.added.length; i++){
      sum += state.added[i].price
    }
    state.sumMoney = sum;
      // console.log(state.added)
    }else {
      // record.num ++
    }
    // console.log( state, id, record)
  }
}

export default {
    state,
    mutations,
    actions,
    getters
}