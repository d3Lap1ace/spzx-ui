import request from '@/utils/request'

// 获取分类下拉树列表 数据s
export function getTreeSelect(id) {
    return request({
      url: '/product/category/treeSelect/'+id, //接口路径
      method: 'get',//请求方式
    })
}

