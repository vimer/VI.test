import java.lang.ref.WeakReference;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.WeakHashMap;

public class WeakHashMapTest {
	    public static void main(String[] args) throws Exception {  
	        String a = new String("a");  
	        String b = new String("b");  
	  		//强引用
			Map map = new HashMap<String,String>();  
			map.put(a, "aaa");  
			map.put(b, "bbb");  

//			map.remove(a);  

			//弱引用
			Map<String, String> weakmap = new WeakHashMap();  
			weakmap.put(a, "aaa");  
			weakmap.put(b, "bbb");  
	
			//软引用
			//gc
			a=null;  
			// b=null;  

			System.gc();  
			 Iterator i = map.entrySet().iterator();  
				while (i.hasNext()) {  
				Map.Entry en = (Map.Entry)i.next();  
				System.out.println("map:"+en.getKey()+":"+en.getValue());  
				}  

			Iterator j = weakmap.entrySet().iterator();  
			while (j.hasNext()) {  
				Map.Entry en = (Map.Entry)j.next();  
				System.out.println("weakmap:"+en.getKey()+":"+en.getValue());  

			}  

		}	
}
