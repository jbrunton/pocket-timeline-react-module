package com.example.pockettimelinereactmodule;

import android.os.Bundle;
import android.view.MenuItem;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.Fragment;

import com.facebook.react.ReactActivity;
import com.facebook.react.modules.core.DefaultHardwareBackBtnHandler;
import com.google.android.material.bottomnavigation.BottomNavigationView;
import com.google.android.material.internal.NavigationMenu;

public class MainActivity extends AppCompatActivity
  implements BottomNavigationView.OnNavigationItemSelectedListener, DefaultHardwareBackBtnHandler {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
//  @Override
//  protected String getMainComponentName() {
//    return "PocketTimelineReactModuleExample";
//  }


  @Override
  protected void onCreate(@Nullable Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);

    ((BottomNavigationView) findViewById(R.id.navigation)).setOnNavigationItemSelectedListener(this);

    if (savedInstanceState == null) {
      showFragment(new TimelinesFragment());
    }
  }

  @Override
  public boolean onNavigationItemSelected(@NonNull MenuItem item) {
    switch (item.getItemId()) {
      case R.id.navigation_timelines:
        showFragment(new TimelinesFragment());
        return true;
      case R.id.navigation_welcome:
        return true;
      default:
        return false;
    }
  }

  private void showFragment(Fragment fragment) {
    getSupportFragmentManager().beginTransaction()
      .replace(R.id.content, fragment)
      .commit();
  }

  @Override
  public void invokeDefaultOnBackPressed() {

  }
}
