import type { Timeline } from './models'
import { Platform } from 'react-native'

// export async function getTimelines(): Promise<Array<Timeline>> {
//   return Promise.resolve([{
//     id: 123,
//     title: "Foo Bar"
//   }])
// }

export async function getTimelines(): Promise<Array<Timeline>> {
  try {
    const url = Platform.select({
      ios: 'http://localhost:3000/timelines.json',
      android: 'http://10.0.2.2:3000/timelines.json'
    }) as string
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (err) {
    console.log("Error: " + err)
    return Promise.reject(err)
  }
}

// export async function getTimeline(id: string): Promise<Timeline> {
//   const response = await fetch(
//     `http://10.0.2.2:3000/timelines/${id}.json`
//   );
//   const json = await response.json();
//   return json;
// }
