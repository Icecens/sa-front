import request from '@/utils/request'

const tableapi = {
  situations: 'situations'
}

export default tableapi

// get所有态势(situation)
export function getSituList (parameter) {
  return request({
    url: tableapi.situations,
    method: 'get',
    params: parameter
  })
}
