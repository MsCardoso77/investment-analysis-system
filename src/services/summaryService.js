import SummaryRepositories from "../repositories/summaryRepositories";

class SummaryService {
  async index() {
    const summaryRepositories = new SummaryRepositories();
    const summaries = await summaryRepositories.getAll();
    return summaries;
  }

  async findByUser(id_user) {
    const summaryRepositories = new SummaryRepositories();
    const summaries = await summaryRepositories.getByUser(id_user);
    return summaries;
  }
  async store(data) {
    const summaryRepositories = new SummaryRepositories();
    await summaryRepositories.createOne(data);
    return;
  }
}

export default SummaryService;
