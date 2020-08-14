//
//  ContentView.swift
//  timeline
//
//  Created by John Brunton on 11/08/2020.
//  Copyright © 2020 com.pocketlearningapps. All rights reserved.
//

import SwiftUI
//import React

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
    //typealias UIViewControllerType = UIView
    
    func makeUIView(context: Context) -> UIView {
        return ReactApps.createWelcomeApp()
    }

    func updateUIView(_ uiView: UIView, context: Context) {
        
    }
}

struct ContentView: View {
    @State private var selection = 0
    //@ObservedObject var fetcher = TimelineFetcher()
 
    var body: some View {
        TabView(selection: $selection){
            Text("Hi")
                .font(.title)
                .tabItem {
                    VStack {
                        Image("first")
                        Text("First")
                    }
                }
                .tag(0)
            WelcomeReactApp()
                .font(.title)
                .tabItem {
                    VStack {
                        Image("second")
                        Text("Second")
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
