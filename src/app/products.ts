export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}
// Probably the most basic way to define an interface and set values for a list of products, but we gotta start somewhere.
// Most likely useful for keeping simple sets of variable data that we don't want to get via an API or JSON file.
export const products = [
  {
    id: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 2,
    name: 'Phone Mini',
    price: 699,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 3,
    name: 'Phone Standard',
    price: 299,
    description: '',
  },
  {
    id: 4,
    name: 'Big Dick Phone (BDP)',
    price: 1420.69,
    description: 'Big Dick Phone for Big Dick Gs.',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
