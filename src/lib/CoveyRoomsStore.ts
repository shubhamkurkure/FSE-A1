import CoveyRoomController from './CoveyRoomController';
import ICoveyRoomsStore from './ICoveyRoomsStore';

export default class CoveyRoomsStore implements ICoveyRoomsStore {
  private static _instance: CoveyRoomsStore;

  private _coveyRoomsControllers = new Map();

  private constructor() {
    /**
     * The constructor is kept private since this class
     * is a singelton and should not be instantiated.
     */
  }

  static getInstance(): CoveyRoomsStore {
    if (CoveyRoomsStore._instance === undefined) {
      CoveyRoomsStore._instance = new CoveyRoomsStore();
    }
    return CoveyRoomsStore._instance;
  }

  getControllerForRoom(coveyRoomId: string): CoveyRoomController {
    if (this._coveyRoomsControllers.has(coveyRoomId)) {
      return this._coveyRoomsControllers.get(coveyRoomId);
    }
    const coveyRoomController = new CoveyRoomController(coveyRoomId);
    this._coveyRoomsControllers.set(coveyRoomId, coveyRoomController);
    return coveyRoomController;
  }
}
