document.addEventListener('DOMContentLoaded', () => {
  const apiUrl = 'http://localhost:8080/admin/realms' // Replace with your API endpoint
  const token =
    'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJQYXhsTG9TOGhEWDRTN3ZwVjFBc3JmSFM5TURHT3RSOUx5VGQ0QlI4dEdJIn0.eyJleHAiOjE2OTY0NzE5ODMsImlhdCI6MTY5NjQzNjg2NiwiYXV0aF90aW1lIjoxNjk2NDM1OTgzLCJqdGkiOiI5OWEyZTJhOS1lODNhLTRlZDctYmZlNS1hNjUzNmY5YWJlZjQiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvcmVhbG1zL21hc3RlciIsInN1YiI6IjI4MjgxYzJjLTQ2NTYtNGI3MC05ZmI3LTllNGQ0NjEzYTllNSIsInR5cCI6IkJlYXJlciIsImF6cCI6InNlY3VyaXR5LWFkbWluLWNvbnNvbGUiLCJub25jZSI6IjcwZDJkYjYyLTY5MjEtNDRkMy05ZGVlLTUxZmUxOTk3YmQ4OSIsInNlc3Npb25fc3RhdGUiOiJhMTg0MGMyNy01YzgwLTQ5ZDMtOGM2OS05N2FiYmNiMWI4YzQiLCJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MCJdLCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiYTE4NDBjMjctNWM4MC00OWQzLThjNjktOTdhYmJjYjFiOGM0IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJSYWlzYW4gSk0iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJyYWlzYW4iLCJnaXZlbl9uYW1lIjoiUmFpc2FuIiwibG9jYWxlIjoiZW4iLCJmYW1pbHlfbmFtZSI6IkpNIiwiZW1haWwiOiJyYWlzYW5qbXJAZ21haWwuY29tIn0.jQQQ2JsBFk9lG1XtbTVv_GydSq6ULXaK-1SgBDd2Uomsy37cP4PytauY7X3kGBIYN-G8uFcA4gayCulCKnejrJZE8pIrDKgHerQeXQ3HzPqoeP0Rmq8o4-YMyK9ycx-hvIKEza_lWWiVJeP4URK-20DyZdYSBxGLYB6gejyrKzd3PPADXDstozmzDo1auP7LeYy9JgK3cnFURkFxXMlKPPyME6SkxNBBdmdY6cJQQF7HxW__NrSn-HySFAnn0GyOtub0KBPvCCujByQutR4JgWM3luHA25Q5g8xPNTKL8GjN2d1Z0gpv5I5eoMEl-x-dolB8C7KhsF39L2yejal-0Q' // Replace with your actual bearer token
  const requestBody = {
    enabled: true,
    realm: 'carehome',
  }
  postData(apiUrl, requestBody, token)
    .then((responseData) => {
      console.log(responseData)
    })
    .catch((error) => {
      console.log(error)
    })
  async function postData(url, data, token) {
    console.log(JSON.stringify(data))
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJQYXhsTG9TOGhEWDRTN3ZwVjFBc3JmSFM5TURHT3RSOUx5VGQ0QlI4dEdJIn0.eyJleHAiOjE2OTY0NzE5ODMsImlhdCI6MTY5NjQzNjg2NiwiYXV0aF90aW1lIjoxNjk2NDM1OTgzLCJqdGkiOiI5OWEyZTJhOS1lODNhLTRlZDctYmZlNS1hNjUzNmY5YWJlZjQiLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvcmVhbG1zL21hc3RlciIsInN1YiI6IjI4MjgxYzJjLTQ2NTYtNGI3MC05ZmI3LTllNGQ0NjEzYTllNSIsInR5cCI6IkJlYXJlciIsImF6cCI6InNlY3VyaXR5LWFkbWluLWNvbnNvbGUiLCJub25jZSI6IjcwZDJkYjYyLTY5MjEtNDRkMy05ZGVlLTUxZmUxOTk3YmQ4OSIsInNlc3Npb25fc3RhdGUiOiJhMTg0MGMyNy01YzgwLTQ5ZDMtOGM2OS05N2FiYmNiMWI4YzQiLCJhY3IiOiIwIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MCJdLCJzY29wZSI6Im9wZW5pZCBlbWFpbCBwcm9maWxlIiwic2lkIjoiYTE4NDBjMjctNWM4MC00OWQzLThjNjktOTdhYmJjYjFiOGM0IiwiZW1haWxfdmVyaWZpZWQiOnRydWUsIm5hbWUiOiJSYWlzYW4gSk0iLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJyYWlzYW4iLCJnaXZlbl9uYW1lIjoiUmFpc2FuIiwibG9jYWxlIjoiZW4iLCJmYW1pbHlfbmFtZSI6IkpNIiwiZW1haWwiOiJyYWlzYW5qbXJAZ21haWwuY29tIn0.jQQQ2JsBFk9lG1XtbTVv_GydSq6ULXaK-1SgBDd2Uomsy37cP4PytauY7X3kGBIYN-G8uFcA4gayCulCKnejrJZE8pIrDKgHerQeXQ3HzPqoeP0Rmq8o4-YMyK9ycx-hvIKEza_lWWiVJeP4URK-20DyZdYSBxGLYB6gejyrKzd3PPADXDstozmzDo1auP7LeYy9JgK3cnFURkFxXMlKPPyME6SkxNBBdmdY6cJQQF7HxW__NrSn-HySFAnn0GyOtub0KBPvCCujByQutR4JgWM3luHA25Q5g8xPNTKL8GjN2d1Z0gpv5I5eoMEl-x-dolB8C7KhsF39L2yejal-0Q`,
          "Content-Type": 'application/json', // Set the content type based on your API's requirements
        },

        body: JSON.stringify(data), // Convert the data to JSON format
        mode: 'no-cors',
      })
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const responseData = await response.json() // Parse the response JSON
      return responseData
    } catch (error) {
      console.error('Error:', error)
      throw error
    }
  }
})
