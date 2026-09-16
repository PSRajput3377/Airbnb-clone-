import { Router, Request, Response } from 'express';
import { propertyData } from '../data/property';

const router = Router();

// GET /api/property - Returns complete property details
router.get('/', (_req: Request, res: Response) => {
  try {
    if (!propertyData) {
      return res.status(404).json({ error: 'Property not found' });
    }
    return res.status(200).json(propertyData);
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error while fetching property' });
  }
});

// GET /api/property/photos - Returns only the image gallery array
router.get('/photos', (_req: Request, res: Response) => {
  try {
    return res.status(200).json({ images: propertyData.images });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch photos' });
  }
});

// GET /api/property/amenities - Returns list of amenities
router.get('/amenities', (_req: Request, res: Response) => {
  try {
    return res.status(200).json({ amenities: propertyData.amenities });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch amenities' });
  }
});

export default router;
