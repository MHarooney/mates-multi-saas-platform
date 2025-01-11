export const fetchTenantData = async (tenantId) => {
  const response = await fetch(`/api/tenants/${tenantId}`);
  return response.json();
};
