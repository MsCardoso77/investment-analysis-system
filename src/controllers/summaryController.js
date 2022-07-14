import SummaryService from "../services/summaryService";

class SummaryController {
  async store(req, res) {
    try {
      const summaryService = new SummaryService();
      await summaryService.store(req.body);
      return res.status(201).json();
    } catch (err) {
      return res.status(400).json(err);
    }
  }
  async index(req, res) {
    try {
      const summaryService = new SummaryService();
      const summaries = await summaryService.index();
      return res.json(summaries);
    } catch (err) {
      return res.status(400).json({ err });
    }
  }
  async findByUser(req, res) {
    try {
      const summaryService = new SummaryService();
      const summaries = await summaryService.findByUser(req.params?.id_user);
      return res.json(summaries);
    } catch (err) {
      return res.status(400).json({ err });
    }
  }
}

export default SummaryController;
