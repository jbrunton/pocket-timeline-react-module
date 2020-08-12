package com.example.pockettimelinereactmodule;

import android.os.Bundle;

import com.facebook.react.PackageList;
import com.facebook.react.ReactFragment;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;

import java.util.List;

public class TimelinesReactFragment extends ReactFragment {
  public TimelinesReactFragment() {
    Bundle args = new Bundle();
    args.putString("arg_component_name", "TimelinesApp");
    args.putBundle("arg_launch_options", new Bundle());
    this.setArguments(args);
  }

  @Override
  protected ReactNativeHost getReactNativeHost() {
    return new ReactNativeHost(getActivity().getApplication()) {
      @Override
      public boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
      }

      @Override
      protected List<ReactPackage> getPackages() {
        return new PackageList(this).getPackages();
      }

      @Override
      protected String getJSMainModuleName() {
        return "index";
      }
    };
  }
}
