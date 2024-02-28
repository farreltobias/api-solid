import { CheckIn } from '@prisma/client'
import { CheckInsRepository } from '@/repositories/check-ins-repository'

interface FetchCheckInUserHistoryUseCaseRequest {
  userId: string
  page: number
}

interface FetchCheckInUserHistoryUseCaseResponse {
  checkIns: CheckIn[]
}

export class FetchCheckInUserHistoryUseCase {
  constructor(private readonly checkInsRepository: CheckInsRepository) {}

  async execute({
    userId,
    page,
  }: FetchCheckInUserHistoryUseCaseRequest): Promise<FetchCheckInUserHistoryUseCaseResponse> {
    const checkIns = await this.checkInsRepository.findManyByUserId(
      userId,
      page,
    )

    return {
      checkIns,
    }
  }
}
