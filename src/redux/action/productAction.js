import serverCall from '../../modules/serverCall'

export const getAllProducts=()=>dispatch=>{
  dispatch({
    type:GET_ALL_PRODUCTS_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/products`
  })
  .then(res=>{
    dispatch({
      type: GET_ALL_PRODUCTS_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: GET_ALL_PRODUCTS_FAIL,
      payload: {error}
    })
    return error
  })
}

export const getProduct=(id)=>dispatch=>{
  dispatch({
    type:GET_PRODUCT_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/products/${id}`
  })
  .then(res=>{
    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload: {error}
    })
    return error
  })
}

export const getProductsByCategory=(c)=>dispatch=>{
  dispatch({
    type:GET_PRODUCTS_BY_CATEGORY_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/products?category=${c}`
  })
  .then(res=>{
    dispatch({
      type: GET_PRODUCTS_BY_CATEGORY_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: GET_PRODUCTS_BY_CATEGORY_FAIL,
      payload: {error}
    })
    return error
  })
}

export const search=(text)=>dispatch=>{
  dispatch({
    type:SEARCH_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/search?query=${text}`
  })
  .then(res=>{
    dispatch({
      type: SEARCH_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: SEARCH_FAIL,
      payload: {error}
    })
    return error
  })
}

export const filter=(text)=>dispatch=>{
  dispatch({
    type:FILTER_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/filter?query=${text}`
  })
  .then(res=>{
    dispatch({
      type: FILTER_SUCCESS,
      payload: res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: FILTER_FAIL,
      payload: {error}
    })
    return error
  })
}

export const FILTER_BEGIN='FILTER_BEGIN'
export const FILTER_SUCCESS='FILTER_SUCCESS'
export const FILTER_FAIL='FILTER_FAIL'

export const SEARCH_BEGIN='SEARCH_BEGIN'
export const SEARCH_SUCCESS='SEARCH_SUCCESS'
export const SEARCH_FAIL='SEARCH_FAIL'


export const GET_ALL_PRODUCTS_BEGIN='GET_ALL_PRODUCTS_BEGIN'
export const GET_ALL_PRODUCTS_SUCCESS='GET_ALL_PRODUCTS_SUCCESS'
export const GET_ALL_PRODUCTS_FAIL='GET_ALL_PRODUCTS_FAIL'

export const GET_PRODUCT_BEGIN='GET_PRODUCT_BEGIN'
export const GET_PRODUCT_SUCCESS='GET_PRODUCT_SUCCESS'
export const GET_PRODUCT_FAIL='GET_PRODUCT_FAIL'

export const GET_PRODUCTS_BY_CATEGORY_BEGIN='GET_PRODUCTS_BY_CATEGORY_BEGIN'
export const GET_PRODUCTS_BY_CATEGORY_SUCCESS='GET_PRODUCTS_BY_CATEGORY_SUCCESS'
export const GET_PRODUCTS_BY_CATEGORY_FAIL='GET_PRODUCTS_BY_CATEGORY_FAIL'