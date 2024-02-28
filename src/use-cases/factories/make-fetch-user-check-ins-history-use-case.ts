import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { FetchCheckInUserHistoryUseCase } from '../fetch-user-check-ins-history'

export function makeFetchCheckInUserHistoryUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()
  const useCase = new FetchCheckInUserHistoryUseCase(checkInsRepository)

  return useCase
}
