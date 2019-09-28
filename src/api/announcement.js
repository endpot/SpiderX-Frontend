import request from '@/utils/request'

export function getAnnouncementList(page = 1, perPage = 100) {
  return request({
    url: '/announcements',
    method: 'get',
    params: {
      per_page: page,
      page: perPage
    }
  })
}

export function createAnnouncement(announcement) {
  return request({
    url: '/announcements',
    method: 'post',
    data: announcement
  })
}

export function updateAnnouncement(id, announcement) {
  return request({
    url: `/announcements/${id}`,
    method: 'post',
    data: announcement
  })
}

export function deleteAnnouncement(id) {
  return request({
    url: `/announcements/${id}`,
    method: 'delete'
  })
}
