import { Trailer } from '~/models/trailer/trailer'

const trailer:Array<Trailer> = [
  {
    id: 1,
    trailer_id: 1,
    unit_number: '4 Truck',
    plate: 'XYZ-1234',
    vin_number: '148KML131',
    registration_renewal_date: '05/05/2025',
    annual_inspection_date: '05/05/2025',
    preventive_maintenance_date: '05/05/2025',
    in_service_date: '05/05/2025',
    out_of_service_date: '05/03/2023',
    ownership_type: 'OOP Owned',
    asset_owner: 'Bob Johnson',
    truck_id: 1,
    model_year: '2022',
    model: 'KML-123',
    length: '48-53 feet(576-636 inches)',
    width: '8.5 feet(102 inches)',
    height: '13.5 feet(162 inches)',
    capacity: '100m3',
    carrier_id: 2,
    notes: '',
    brand: 'Volvo',
    color: 'Red',
    updated_date: '20/04/2023',
    equipment_type: 'test',
    equipment_weight: 3
  },
  {
    id: 2,
    trailer_id: 2,
    unit_number: '7 Truck',
    plate: 'CKM-1234',
    vin_number: '986ZPT131',
    registration_renewal_date: '20/08/2021',
    annual_inspection_date: '25/08/2025',
    preventive_maintenance_date: '30/08/2025',
    in_service_date: '31/05/2025',
    out_of_service_date: '17/03/2023',
    ownership_type: 'OOP Owned',
    asset_owner: 'Carmelo Anthony',
    truck_id: 1,
    model_year: '2022',
    model: 'ZPT-123',
    length: '89-53 feet(576-636 inches)',
    width: '1.5 feet(28 inches)',
    height: '3.5 feet(35 inches)',
    capacity: '200m3',
    carrier_id: 2,
    notes: '',
    brand: 'Mercedes',
    color: 'Red',
    updated_date: '28/04/2023',
    equipment_type: 'test',
    equipment_weight: 3
  }
]

export default trailer
