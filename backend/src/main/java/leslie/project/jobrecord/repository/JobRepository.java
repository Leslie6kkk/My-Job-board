package leslie.project.jobrecord.repository;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
// 要用我们自己建的interface去extend原来的jpa-interface
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import leslie.project.jobrecord.entity.JobBean;

import java.time.LocalDate;
import java.time.temporal.TemporalAdjusters;

@Repository
public interface JobRepository extends JpaRepository<JobBean,UUID> {
    List<JobBean> findByJobstate(String jobstate);
    //这个interface的input为什么是这样我也没看懂？？？？？？？？？？

//    @Query("SELECT COUNT(j) FROM JobBean j WHERE j.jobstate = :status AND j.applytime BETWEEN :startDate AND :endDate")
//    long countJobsThisMonth(@Param("startOfMonth") Date startOfMonth, @Param("startOfNextMonth") Date startOfNextMonth, String status);

    @Query("SELECT COUNT(j) FROM JobBean j WHERE j.applytime >= :startOfMonth AND j.applytime < :startOfNextMonth AND j.jobstate = :status")
    Long countJobsThisMonth(@Param("startOfMonth") Date startOfMonth, @Param("startOfNextMonth") Date startOfNextMonth, String status);
}
