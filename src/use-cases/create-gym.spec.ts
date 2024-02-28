import { beforeEach, describe, expect, it } from 'vitest'
import { CreateGymUseCase } from './create-gym'

import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'

describe('Create Gym Use Case', () => {
  let gymsRepository: InMemoryGymsRepository
  let sut: CreateGymUseCase

  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(gymsRepository)
  })

  it('should be able to create gym', async () => {
    const { gym } = await sut.execute({
      title: 'JavaScript Gym',
      description: null,
      phone: null,
      latitude: 14.4095261,
      longitude: -51.31668,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
