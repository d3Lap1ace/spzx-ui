import request from '@/utils/request'

export function listBrand(query) {
    return request({
        url: '/product/brand/list',
        method: 'get',
        params: query
    })

}

// 新增品牌
export function addBrand(data) {
    return request({
      url: '/product/brand',
      method: 'post',
      data: data
    })
}


// 查询品牌详细
export function getBrand(id) {
    return request({
      url: '/product/brand/' + id,
      method: 'get'
    })
}
  
  // 修改品牌
export function updateBrand(data) {
    return request({
        url: '/product/brand',
        method: 'put',
        data: data
    })
}


// 删除品牌
export function delBrand(id) {
    return request({
      url: '/product/brand/' + id,
      method: 'delete'
    })
}

// 获取全部品牌
export function getBrandAll() {
    return request({
      url: '/product/brand/getBrandAll',
      method: 'get'
    })
}





const brandList = ref([
    {
        createTime: "2024-01-09 10:15:05",
        id: 1,
        name: "华为",
        logo: "http://139.198.127.41:9000/sph/20230506/华为.png",
    },
    {
        createTime: "2024-01-19 10:15:05",
        id: 2,
        name: "小米",
        logo: "http://139.198.127.41:9000/sph/20240202/xm.png",
    },
]);