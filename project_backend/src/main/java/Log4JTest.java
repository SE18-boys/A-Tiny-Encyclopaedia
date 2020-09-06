import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Level;
import org.apache.log4j.Logger;

public class Log4JTest {

    public static void main(String[] args) {
        //获取Logger对象的实例
        Logger logger = Logger.getLogger(Log4JTest.class);
        //使用默认的配置信息，不需要写log4j.properties
        BasicConfigurator.configure();
        //设置日志输出级别为WARN，这将覆盖配置文件中设置的级别，只有日志级别高于WARN的日志才输出
        logger.setLevel(Level.WARN);
        logger.debug("这是debug");
        logger.info("这是info");
        logger.warn("这是warn");
        logger.error("这是error");
        logger.fatal("这是fatal");
    }

}
