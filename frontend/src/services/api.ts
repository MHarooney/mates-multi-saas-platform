import axios from 'axios'

export const api = {
  async getTenants() {
    const response = await axios.get('/tenants')
    return response.data
  },
  async createTenant(data: any) {
    const response = await axios.post('/tenants', data)
    return response.data
  },
}
