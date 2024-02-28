import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'

describe('Fetch Nearby Gyms Use Case', () => {
  let gymsRepository: InMemoryGymsRepository
  let sut: FetchNearbyGymsUseCase

  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to search for gyms', async () => {
    await gymsRepository.create({
      title: 'Near Gym',
      description: null,
      phone: null,
      latitude: 14.4095261,
      longitude: -51.31668,
    })

    await gymsRepository.create({
      title: 'Far Gym',
      description: null,
      phone: null,
      latitude: -23.1466034,
      longitude: -50.5187678,
    })

    const { gyms } = await sut.execute({
      userLatitude: 14.4095261,
      userLongitude: -51.31668,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Near Gym' })])
  })
})
