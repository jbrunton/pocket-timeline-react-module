//
//  ContentView.swift
//  timeline
//
//  Created by John Brunton on 11/08/2020.
//  Copyright © 2020 com.pocketlearningapps. All rights reserved.
//

import SwiftUI

//struct TimelinesView : View {
//    @ObservedObject var fetcher = TimelineFetcher()
//
//    var body: some View {
//        List(fetcher.timelines) { timeline in
//            Image(systemName: "photo")
//            VStack(alignment: .leading) {
//                Text(timeline.title)
//                Text(timeline.description)
//                    .font(.subheadline)
//            }
//        }
//    }
//}
//
//struct WelcomeReactApp: UIViewRepresentable {
//    //typealias UIViewControllerType = UIView
//
//    func makeUIView(context: Context) -> UIView {
//        return ReactApps.createWelcomeApp()
//    }
//
//    func updateUIView(_ uiView: UIView, context: Context) {
//
//    }
//}

struct WelcomeReactApp: UIViewRepresentable {    
    func makeUIView(context: Context) -> UIView {
      let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
      let rootView = RCTRootView(
          bundleURL: jsCodeLocation!,
          moduleName: "WelcomeApp",
          initialProperties: nil,
          launchOptions: nil
      )
      return rootView
    }

    func updateUIView(_ uiView: UIView, context: Context) {
        
    }
}

struct TimelinesReactApp: UIViewRepresentable {
    func makeUIView(context: Context) -> UIView {
      let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
      let rootView = RCTRootView(
          bundleURL: jsCodeLocation!,
          moduleName: "TimelinesApp",
          initialProperties: nil,
          launchOptions: nil
      )
      return rootView
    }

    func updateUIView(_ uiView: UIView, context: Context) {
        
    }
}

struct ContentView: View {
    @State private var selection = 0
    //@ObservedObject var fetcher = TimelineFetcher()
 
    var body: some View {
        TabView(selection: $selection){
            WelcomeReactApp()
                .font(.title)
                .tabItem {
                    VStack {
                        Image("first")
                        Text("Welcome")
                    }
                }
                .tag(0)
            TimelinesReactApp()
                .font(.title)
                .tabItem {
                    VStack {
                        Image("second")
                        Text("Timelines")
                    }
                }
                .tag(1)
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
