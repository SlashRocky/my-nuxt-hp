import axios from 'axios'
import config from './config/index'

export default {
  endpoint: config.endpoint,
  getPosts(params) {
    return new Promise((resolve, reject) => {
      axios.defaults.baseURL = this.endpoint
      axios
        .get('/wp/v2/posts', {
          params: {
            _embed: 1,
            per_page: params.perPage,
            page: params.page,
            categories: params.catId || null
          }
        })
        .then(response => {
          const data = [...response.data]
          if (response.status === 200 && response.data.length > 0) {
            const filteredPosts = {
              total: response.headers['x-wp-total'],
              totalPages: response.headers['x-wp-totalpages'],
              data: data.map(item => ({
                id: item.id,
                title: item.title.rendered,
                thumbnail: item['_embedded']['wp:featuredmedia']
                  ? item['_embedded']['wp:featuredmedia'][0]['media_details']['sizes'][params.thumbnailSize]
                    ? item['_embedded']['wp:featuredmedia'][0]['media_details']['sizes'][params.thumbnailSize]['source_url']
                    : item['_embedded']['wp:featuredmedia'][0]['media_details']['sizes']['full']['source_url']
                  : null,
                content: item.content.rendered,
                excerpt: item.excerpt.rendered,
                slug: item.slug,
                date: item.date,
                category: item.category_name
              }))
            }
            resolve(filteredPosts)
          } else {
            reject(response)
          }
        })
        .catch(error => {
          reject(error.response)
        })
    })
  },
  getPost(params) {
    return new Promise((resolve, reject) => {
      axios.defaults.baseURL = this.endpoint
      axios
        .get(`/wp/v2/posts/${params.id}?_embed`)
        .then(response => {
          const data = response.data
          if (response.status === 200) {
            const filteredPost = {
              id: data.id,
              content: data.content.rendered,
              date: data.date,
              title: data.title.rendered,
              thumbnail: data['_embedded']['wp:featuredmedia']
                ? data['_embedded']['wp:featuredmedia'][0]['media_details']['sizes'][params.thumbnailSize]
                  ? data['_embedded']['wp:featuredmedia'][0]['media_details']['sizes'][params.thumbnailSize]['source_url']
                  : data['_embedded']['wp:featuredmedia'][0]['media_details']['sizes']['full']['source_url']
                : null,
              category: data.category_name
            }
            resolve(filteredPost)
          } else {
            reject(response)
          }
        })
        .catch(error => {
          reject(error.response)
        })
    })
  },
  getCategories() {
    return new Promise((resolve, reject) => {
      axios.defaults.baseURL = this.endpoint
      return axios
        .get('/wp/v2/categories')
        .then(response => {
          const data = [...response.data]
          if (response.status === 200 && response.data.length > 0) {
            resolve(data)
          } else {
            reject(response)
          }
        })
        .catch(error => {
          reject(error.response)
        })
    })
  }
}
