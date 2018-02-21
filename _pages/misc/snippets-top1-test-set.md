---
title: Test Set for Java Snippet 1
permalink: /misc/snippets-top1-test-set
---

# Snippet:

    public static String humanReadableByteCount(long bytes, boolean si) {
        int unit = si ? 1000 : 1024;
        if (bytes < unit) return bytes + " B";
        int exp = (int) (Math.log(bytes) / Math.log(unit));
        String pre = (si ? "kMGTPE" : "KMGTPE").charAt(exp-1) + (si ? "" : "i");
        return String.format("%.1f %sB", bytes / Math.pow(unit, exp), pre);
    }

[Answer](http://stackoverflow.com/a/3758880) to question *"How to convert byte size into human readable format in java?"* on Stack Overflow by user [aioobe](https://stackoverflow.com/users/276052/aioobe).

# Regular Expression:

    ((?i:String[\s]+\w+\([ˆ\{]*long[ˆ\{]+\)[\s]*\{[\s\S]+if
    [\s]*\([ˆ<]+<[ˆ\)]+\)[\s\S]*return[ˆ;]+\+[ˆ;]*\”\ B\”
    [\s\S]+int[\s][ˆ\=]+\=[\s]*\([\s]*int[\s]*\)[\s]*\([\s]*
    Math[\s]*\.[\s]*log[\s]*\([ˆ\)]+\)[\s]*\/[\s]*Math[\s]*
    \.[\s]*log[\s]*\([ˆ\)]+\)[\s]*\)[\s\S]+return[ˆ\}]+
    String[\s]*\.[\s]*format[\s]*\([ˆ\}]+\}))

<br/>

# Matched Files:

[File 1](https://github.com/louboco/Icicle/blob/master/app/src/main/java/co/loubo/icicle/Constants.java):

	//http://stackoverflow.com/a/3758880
	@SuppressLint("DefaultLocale")
	public static String humanReadableByteCount(long bytes, boolean si) {
	    int unit = si ? 1000 : 1024;
	    if (bytes < unit) return bytes + " B";
	    int exp = (int) (Math.log(bytes) / Math.log(unit));
	    String pre = (si ? "kMGTPE" : "KMGTPE").charAt(exp-1) + (si ? "" : "i");
	    return String.format("%.1f %sB", bytes / Math.pow(unit, exp), pre);
    }


[File 2](https://github.com/Benpai/OpsuRefined/blob/master/src/itdelatrisu/opsu/Utils.java):

	/**
	 * Returns a human-readable representation of a given number of bytes.
	 * @param bytes the number of bytes
	 * @return the string representation
	 * @author aioobe (http://stackoverflow.com/a/3758880)
	 */
	public static String bytesToString(long bytes) {
		if (bytes < 1024)
			return bytes + " B";
		int exp = (int) (Math.log(bytes) / Math.log(1024));
		char pre = "KMGTPE".charAt(exp - 1);
		return String.format("%.1f %cB", bytes / Math.pow(1024, exp), pre);
    }   

[File 3](https://github.com/uq-eresearch/aorra/blob/master/test/charts/builder/ChartBuilderSizeTest.java):

      // from http://stackoverflow.com/a/3758880
      private String humanReadableByteCount(long bytes, boolean si) {
        int unit = si ? 1000 : 1024;
        if (bytes < unit) return bytes + " B";
        int exp = (int) (Math.log(bytes) / Math.log(unit));
        String pre = (si ? "kMGTPE" : "KMGTPE").charAt(exp-1) + (si ? "" : "i");
        return String.format("%.1f %sB", bytes / Math.pow(unit, exp), pre);
    }

[File 5](https://github.com/OpenSilk/SyncthingAndroid/blob/master/app/src/main/java/syncthing/android/service/SyncthingUtils.java):

    //http://stackoverflow.com/a/3758880
    public static String humanReadableSize(long bytes) {
        if (bytes < 1024) return bytes + " B";
        int exp = (int) (Math.log(bytes) / Math.log(1024));
        return String.format(Locale.US, "%s %siB",
                READABLE_DECIMAL_FORMAT.format(bytes / Math.pow(1024, exp)), UNITS.charAt(exp - 1));
    }

[File 6](https://github.com/Atmatm6/SchematicGithubConnector/blob/master/src/api/java/com/github/lunatrius/schematica/util/FileUtils.java):

    // http://stackoverflow.com/a/3758880/1166946
    public static String humanReadableByteCount(final long bytes) {
        final int unit = 1024;
        if (bytes < unit) {
            return bytes + " B";
        }

        int exp = (int) (Math.log(bytes) / Math.log(unit));
        final String pre = "KMGTPE".charAt(exp - 1) + "i";

        return String.format("%3.0f %sB", bytes / Math.pow(unit, exp), pre);
    }

[File 7](https://github.com/kurumi-moe/MoeGallery/blob/master/app/src/main/java/moe/kurumi/moegallery/utils/Utils.java):

    // read more from here: http://stackoverflow.com/a/3758880/2600042
    public static String humanReadableByteCount(long bytes, boolean si) {
        int unit = si ? 1000 : 1024;
        if (bytes < unit) return bytes + " B";
        int exp = (int) (Math.log(bytes) / Math.log(unit));
        String pre = (si ? "kMGTPE" : "KMGTPE").charAt(exp - 1) + (si ? "" : "i");
        return String.format("%.1f %sB", bytes / Math.pow(unit, exp), pre);
    }

[File 8](https://github.com/mrbald/ownmail/blob/master/src/main/java/net/bobah/mail/Utils.java):

    /**
     * Human-friendly size formatter
     * 
     * @param bytes
     * @param si
     * @return
     */
    public static String formatBytes(long bytes, boolean si) {
        // http://stackoverflow.com/a/3758880/267482
        int unit = si ? 1000 : 1024;
        if (bytes < unit) return bytes + " B";
        int exp = (int) (Math.log(bytes) / Math.log(unit));
        String pre = (si ? "kMGTPE" : "KMGTPE").charAt(exp-1) + (si ? "" : "i");
        return String.format("%.1f %sB", bytes / Math.pow(unit, exp), pre);
    }

[File 9](https://github.com/myfreeweb/antigravity/blob/master/src/main/java/com/floatboth/antigravity/ui/FileDescriptionHelper.java):

      // http://stackoverflow.com/a/3758880
      public static String size(long bytes, boolean si) {
        int unit = si ? 1000 : 1024;
        if (bytes < unit) return bytes + " B";
        int exp = (int) (Math.log(bytes) / Math.log(unit));
        String pre = (si ? "kMGTPE" : "KMGTPE").charAt(exp-1) + (si ? "" : "i");
        return String.format("%.1f %sB", bytes / Math.pow(unit, exp), pre);
    }

[File 10](https://github.com/dotcool/coolreader/blob/master/src/com/dotcool/reader/helper/Util.java):

	/**
	 * http://stackoverflow.com/a/3758880
	 * 
	 * @param bytes
	 * @param si
	 * @return
	 */
	public static String humanReadableByteCount(long bytes, boolean si) {
		int unit = si ? 1000 : 1024;
		if (bytes < unit)
			return bytes + " B";
		int exp = (int) (Math.log(bytes) / Math.log(unit));
		String pre = (si ? "kMGTPE" : "KMGTPE").charAt(exp - 1) + (si ? "" : "i");
		return String.format("%.1f %sB", bytes / Math.pow(unit, exp), pre);
}

<br/>

# Not Matched:

[File 4](https://github.com/izstas/RFS/blob/master/client/src/main/java/me/izstas/rfs/client/util/FormatUtil.java):

    /**
     * Formats a file size.
     * @param size the file size in bytes
     * @return formatted file size, e.g. 1 KB, 2 MB, etc
     */
    public static String formatSize(Long size) {
        if (size == null) {
            return null;
        }

        // Based on code by aioobe, http://stackoverflow.com/a/3758880
        int unit = 1024;
        if (size < unit) {
            return String.format("%d B", size);
        }

        int exp = (int) (Math.log(size) / Math.log(unit));
        return String.format("%.2f %cB", size / Math.pow(unit, exp), "KMGTPE".charAt(exp - 1));
    }
