package chuwxntc.wikilookup;

import android.os.Bundle;
import android.view.View;
import android.view.View.OnLongClickListener;

import org.apache.cordova.*;

public class Wikilookup extends DroidGap {
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.setIntegerProperty("splashscreen", R.drawable.splash);
		super.loadUrl(Config.getStartUrl(), 10000);
		
		super.appView.setOnLongClickListener(new OnLongClickListener() {
			@Override
			public boolean onLongClick(View v) {
				return true;
			}
		});
	}
}
