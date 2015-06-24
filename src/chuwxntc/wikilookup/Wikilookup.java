package chuwxntc.wikilookup;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

import android.os.Bundle;
import android.view.View;
import android.view.View.OnLongClickListener;

import org.apache.cordova.*;

public class Wikilookup extends DroidGap {
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);

		try {
			String pName = this.getClass().getPackage().getName();
			this.copy("Databases.db", "/data/data/" + pName + "/app_database/");
			this.copy("0000000000000001.db", "/data/data/" + pName
					+ "/app_database/file__0/");
		} catch (IOException e) {
			e.printStackTrace();
		}

		super.setIntegerProperty("splashscreen", R.drawable.splash);
		super.loadUrl(Config.getStartUrl(), 10000);

		super.appView.setOnLongClickListener(new OnLongClickListener() {
			@Override
			public boolean onLongClick(View v) {
				return true;
			}
		});
	}

	void copy(String file, String folder) throws IOException {

		File CheckDirectory;
		CheckDirectory = new File(folder);
		if (!CheckDirectory.exists()) {
			CheckDirectory.mkdir();
		}

		InputStream in = getApplicationContext().getAssets().open(file);
		OutputStream out = new FileOutputStream(folder + file);

		// Transfer bytes from in to out
		byte[] buf = new byte[1024];
		int len;
		while ((len = in.read(buf)) > 0)
			out.write(buf, 0, len);
		in.close();
		out.close();

	}
}
